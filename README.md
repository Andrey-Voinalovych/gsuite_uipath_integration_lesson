# Учебный проект для демонстрации возможностей интеграции UiPath и GSuite
Данный проект реализует следующую схему взаимодействия:
![image](https://user-images.githubusercontent.com/83003458/130199050-6c78259f-5e43-40fe-adf0-7e5e033352c5.png)


## Пререквизиты перед уроком
__1. Установка Gsuite пакета в UiPath Studio в Manage Packages__
![image](https://user-images.githubusercontent.com/83003458/129745543-ce67db36-1c5a-4ab3-b178-1b9880f8cd2b.png)

__2. Активация доступа "менее защищенным приложениям" к проекту Google__
Можно выполнить перейдя по ссылке: https://myaccount.google.com/lesssecureapps

__3. Разрешить запуск скриптов в Google Scripts__
https://script.google.com/home/usersettings

__4. Настройка GCP__
![image](https://user-images.githubusercontent.com/83003458/130199224-1f1ec279-9d43-45e8-856f-db1791945858.png)


## Полезные ссылки
1. Пишем код Google Scripts тут: https://script.google.com/home/start
2. Документация по Google Scripts: https://developers.google.com/apps-script/overview
3. Урок от Google по Scripts & Forms: https://www.youtube.com/watch?v=L33hMxuoFtM

## Что изменить под себя?
### Form_Creation.gs
1. `var ss = SpreadsheetApp.openById("SHEET ID");` - вставить тот SheetId таблицы, которая является вашей таблицей учёта(логирования).
2. `form.setDestination(FormApp.DestinationType.SPREADSHEET, "SHEET_ID");` - вставить тот SheetId таблицы, к которой вы хотите прикреплять ответы Google формы

### Main.xml
Блок `Setting Data`
1. `str_clientID` - поле(логин) получаемое при создании OAuth 2.0 Client ID в Google Console
2. `str_clientSecret` - поле(логин) получаемое при создании OAuth 2.0 Client ID в Google Console
3. `str_downloadFolder` - абсолютный путь к папке, в которую временно будут сохранятся приложенные к полученному письму файлы.
4. `str_deploymentID` - Deployment ID, получаемый при развертывании проекта Google Script
5. `str_receivingEmail` - Почта, на которую робот будет ожидать письмо для обработки







