@echo off
setlocal
set SCRIPT_DIR=%~dp0
if defined JAVA_HOME (
  "%JAVA_HOME%\bin\java.exe" -cp "%SCRIPT_DIR%\.mvn\wrapper\maven-wrapper.jar" org.apache.maven.wrapper.MavenWrapperMain %*
) else (
  java -cp "%SCRIPT_DIR%\.mvn\wrapper\maven-wrapper.jar" org.apache.maven.wrapper.MavenWrapperMain %*
)
