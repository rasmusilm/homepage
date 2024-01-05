cd .\.output\public\git init       
git remote add origin https://github.com/rasmusilm/homepage.git
git add *
git commit -m "fix"
git branch -M main
git push -u -f origin main