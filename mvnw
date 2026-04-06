#!/usr/bin/env sh

BASEDIR=$(dirname "$0")
BASEDIR=$(cd "$BASEDIR" >/dev/null 2>&1 && pwd)

JAVA_CMD=java
if [ -n "$JAVA_HOME" ]; then
  JAVA_CMD="$JAVA_HOME/bin/java"
fi

exec "$JAVA_CMD" -cp "$BASEDIR/.mvn/wrapper/maven-wrapper.jar" org.apache.maven.wrapper.MavenWrapperMain "$@"
