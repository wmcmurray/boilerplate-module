#!/bin/bash

REPO_NAME="module"
REPO_PATH="`dirname \"$0\"`"                # relative path
REPO_PATH="`( cd \"$REPO_PATH\" && pwd )`"  # absolutized and normalized path

echo -e "\n\e[96mStarting a guake tab for server and watch..."
guake -n "$REPO_PATH" -r "$REPO_NAME dev" -e "npm run dev"

echo -e "Starting a guake tab for git..."
guake -n "$REPO_PATH" -r "$REPO_NAME git" -e "git status"

echo -e "\e[39m\e[49m"
