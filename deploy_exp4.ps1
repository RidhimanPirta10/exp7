<#
PowerShell helper to create GitHub repo, push code, deploy to Vercel,
and set GitHub Actions secrets for Experiment 5. You must have:
- Git installed and configured
- GitHub CLI (`gh`) authenticated
- Vercel CLI (`vercel`) installed

This script prompts for tokens and IDs where required.

Usage (PowerShell):
> ./deploy_exp4.ps1
#>

param()

function Confirm-Command([string]$cmd){
  try{ Get-Command $cmd -ErrorAction Stop | Out-Null; return $true } catch { return $false }
}

if (-not (Confirm-Command gh)){
  Write-Error "GitHub CLI 'gh' not found. Install from https://cli.github.com/"
  exit 1
}
if (-not (Confirm-Command vercel)){
  Write-Error "Vercel CLI 'vercel' not found. Install with 'npm i -g vercel'"
  exit 1
}

$cwd = Get-Location
Write-Host "Working directory: $cwd"

# defaults
$defaultRepoName = 'exp-5'
$repoName = Read-Host "GitHub repo name (default: $defaultRepoName)"; if ([string]::IsNullOrWhiteSpace($repoName)) { $repoName = $defaultRepoName }

Write-Host "Checking git repository..."
if (-not (Test-Path .git)){
  git init
}

git add --all
try{ git commit -m "Experiment 5 scaffold" -q } catch { Write-Host "No changes to commit or commit failed (this is OK)." }

Write-Host "Creating GitHub repo '$repoName' (public). You may be prompted to authenticate by gh." -ForegroundColor Cyan
gh repo create $repoName --public --source=. --remote=origin --push --confirm

Write-Host "Repository created and pushed to GitHub. Now deploy to Vercel." -ForegroundColor Cyan

$vercelToken = Read-Host -AsSecureString "Enter your Vercel token (or press Enter to use your interactive login)"; $vt = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($vercelToken))
if ([string]::IsNullOrWhiteSpace($vt)){
  Write-Host "Using interactive/vercel login flow. You will be prompted if needed." -ForegroundColor Yellow
  vercel --prod --confirm
} else {
  Write-Host "Deploying with provided token..." -ForegroundColor Yellow
  vercel --prod --confirm --token $vt
}

Write-Host "Deployment finished (check output above for the deployment URL)." -ForegroundColor Green

Write-Host "Next: set GitHub secrets for the workflow. To do that we need VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID." -ForegroundColor Cyan
Write-Host "If you don't know Org/Project IDs, open your Vercel dashboard -> Project Settings -> General to copy them, then paste here." -ForegroundColor Yellow

$useToken = Read-Host "Do you want to set GitHub secrets now from this script? (y/n)"; if ($useToken -ne 'y') { Write-Host "Skipped setting secrets."; exit 0 }

$plainToken = Read-Host -AsSecureString "Paste your Vercel token (will be stored as GitHub secret)"; $token = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($plainToken))
$orgId = Read-Host "Paste your Vercel Org ID"
$projId = Read-Host "Paste your Vercel Project ID"

Write-Host "Adding GitHub secrets via gh. You may be prompted to authenticate with GitHub CLI." -ForegroundColor Cyan
gh secret set VERCEL_TOKEN --body "$token"
gh secret set VERCEL_ORG_ID --body "$orgId"
gh secret set VERCEL_PROJECT_ID --body "$projId"

Write-Host "Secrets added. GitHub Actions workflow will run on next push and deploy to Vercel." -ForegroundColor Green

Write-Host "Optional: set alias to the required formatted hostname (e.g. 23BAI70112-5-ridhiman-pirta.vercel.app)" -ForegroundColor Cyan
$setAlias = Read-Host "Do you want to alias the latest deployment now? (y/n)"
if ($setAlias -eq 'y'){
  $deploymentUrl = Read-Host "Enter the deployment URL returned by Vercel (e.g. your-app-abc123.vercel.app)"
  $alias = Read-Host "Enter alias (e.g. 23BAI70112-5-ridhiman-pirta.vercel.app)"
  if (-not [string]::IsNullOrWhiteSpace($vt)){
    vercel alias set $deploymentUrl $alias --token $vt
  } else {
    vercel alias set $deploymentUrl $alias
  }
  Write-Host "Alias set (or attempted). Verify on Vercel dashboard." -ForegroundColor Green
}

Write-Host "All done. Visit your GitHub repo and Vercel project to confirm." -ForegroundColor Green
