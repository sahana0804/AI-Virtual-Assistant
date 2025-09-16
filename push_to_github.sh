#!/bin/bash

# Usage:
# 1. Create a new repository on GitHub manually (e.g., https://github.com/new)
# 2. Replace the URL below with your new repository's HTTPS URL
# 3. Run this script: bash push_to_github.sh

# Set your new GitHub repository URL here
NEW_REPO_URL="https://github.com/sahana0804/AI-Virtual-Assistant.git"

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
  git init
fi

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - full project push"

# Set remote origin to the new repository
git remote remove origin 2> /dev/null
git remote add origin $NEW_REPO_URL

# Push to main branch
git branch -M main
git push -u origin main

echo "Project pushed to $NEW_REPO_URL"
