rmdir /s /q assets
rmdir /s /q images
rmdir /s /q md
del 404.html
del index.html

xcopy ..\program-inn\.site\* .\ /s /e /i /c /h /r /y

git add .
set /p message=commit message:
git commit -m %message%
git push origin master