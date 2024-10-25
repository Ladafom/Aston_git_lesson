## OPTIONS

Options -- HTTP  метод, использующийся для получения параметров соединения с сервером. Вызывается, когда:

- необходимо узнать, работает ли сервер, какие методы запроса можно отправлять серверу;
- необходимо отправить предварительный запрос согласно политике CORS, чтобы узнать приемлемо ли отправлять запросы с этим методом

OPTIONS принимает заголовки запроса, например: Access-Control-Request-Method: POST

OPTIONS отдает список поддерживаемых методов, заголовки, несущие информацию о доступности ресурсов, например: Access-Control-Allow-Methods: POST, GET, OPTIONS

## HTTP 3.0

Главная особенность HTTP/3 -- использование QUIC протокола, что позволяет быстрее устанавливать соединение, повысить скорость передачи данных, улучшить работу мультиплексирования.
Также HTTP/3 имеет другой алгоритм сжатия заголовков.

## Let и const
У `let` и `const` есть temporal dead zone  — момент выполнения скрипта до объявления переменной.