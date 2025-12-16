#!/bin/bash

echo "🔄 Adding changes..."
git add .

echo "📝 Committing changes..."
git commit -m "Auto update from push.sh"

echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Code pushed successfully!"
