## Start/stop MongoDB service:
- net start MongoDB
- net stop MongoDB

## Enable security:
> c:\Program Files\MongoDB\Server\4.0\bin\mongod.cfg
> ...
> security:
> authorization: enabled
> ...

>db.createUser(
>{
>  user: "nits",
>  pwd: "Abc123456",
>  roles:["root"]
>})
