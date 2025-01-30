### Manual for work

## settings for working
- **git config --global user.name "YourName"** - Настройка имени
- **git config --global user.email "name@mail.ru"**  - Настройка электронной почты

## begining working 
- **git init** - Подготовить к работе репозиторий 
- **git status** - Посмотреть состояние репозитория
- **git remote add origin *ссылка***  - Добавить удаленный репозиторий

## index and commit
- **git add .**  - Проиндексировать новые или измененные файлы 
- **git commit -m** - "Описание, что изменилось" Зафиксировать изменения

## working
- **git log** - Посмотреть историю коммитов
- **git reset HEAD index.ts**  - Убрать файл из индекса
- **git rm index.ts**  - Убрать файл из последнего коммита и удалить этот файл. 
- **git rm --cached index.ts** - Убрать файл из последнего коммита, но не удалять этот файл.
- **git push origin master** - Отправить изменения в удаленный репозиторий
