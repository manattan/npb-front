## Search-NPB
https://search-npb.web.app

各球団の背番号の歴史を調べることができるWebアプリケーションです。

また、ログインすることで各情報について編集リクエストを送ることができます。

承認されたら、それが反映されます！

### hosting先
firebase hosting を用いています。

### ログインについて
firebase authentication を用いています。

### DBの設計

postgreSQL を用いています。

#### info
|項目|型||
|---|---|---|
|id|int| 固有Id |
|num|int| 背番号|
|teamname|varchar(2)||
|history|varchar(600)||

#### request
|項目|型||
|---|---|---|
|id|int|固有Id|
|dataid|int| info の id に紐づく|
|uid|varchar(30)|リクエストを送った人のuser id(firebase auth に紐づく)|
|prevent|varchar(600)| 変更前の値|
|new|varchar(600)| 変更後の値|
|merged|int| リクエストの状態。0は未merge、1はmerged、2はrejected|

#### user
|項目|型||
|---|---|---|
|id|int|固有Id|
|uid|varchar(30)||
|email|varchar(20)||
|name|varchar(10)||
