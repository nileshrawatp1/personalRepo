# Table of Contents

- [Table of Contents](#table-of-contents)  
   * [<ins>Create Alias</ins></ins>](#create-alias)  
   * [<ins><ins>Filter SQL Queries</ins></ins></ins>](#filter-sql-queries)  


### Create Alias
---
 - locate .bashrc   
 - Paste all alias over there.    

 <b>Local System Alias</b>
```bash
alias agit='cd /home/nilesh/github/ameyoGits/'
alias alogs='cd /dacx/var/ameyo/dacxdata/com.drishti.dacx.server.product/logs/'
alias crm='cd /dacx/ameyo/crm/html/'
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'
alias gadd='git add .'
alias gc='git commit -m'
alias gac='git commit -am'
alias gcl='git clone'
alias gpom='git push origin master'
alias grep='grep --color=auto'
alias gs='git status'
alias glogs='git log --graph --oneline --decorate --pretty=fuller'
alias h='history'
alias home='cd /home/nilesh/'
alias l.='ls -d .* --color=auto'
alias l='ls -ltrah --block-size=m'
alias ll='ls -l --color=auto'
alias ls='ls --color=auto'
alias ngit='cd /home/nilesh/github/nileshGits/'
alias search='grep -Pri'
alias gindex="~/gh-md-toc README.md"
alias djtaccess="ssh root@192.168.168.4"
alias rhino="java -jar /home/nilesh/testing/rhino-16rc6.jar"
alias phpserver="php -S localhost:8080"
alias emerge="ssh nilesh@app.ameyoemerge.in -p 6745"
alias us3copy="scp -rP 40222 nileshrawat@control.dacx.net:/home/nileshrawat/* ."
```

### <ins>Filter SQL Queries</ins>
---
1. To add two minutes in current time in SQL.

```sql
select ''||now()+'2 minutes'::interval||'';
```

2. To check if the Filter will work. Here, **::timestamp::text < ''||now()||''** is filter and **session_start_time** is dataTable column.
   - In this **_::timestamp_** converts the session_start_time to the time.
   - And here **_::text_** converts the converted timezone to text again to match the now();
   - This **_::timezone::text_** also helped to make this `2021-2-25 14:59:59` equal to this `2021-02-25 14:59:59`

```sql
select * from dt_testob_6_6  where session_start_time ::timestamp::text < ''||now()||'';
```

3. Then to check if the customer moved to cache to dial or not.
   - Here , `2542872, 2542873, 2542874` are the \_\_customer_id from data_table.

```sql
select  * from campaign_customer where customer_id in (2542872, 2542873, 2542874);
```

### <ins>Alternate transfer.sh</ins>  
---
1. Using curl (PUT method)
   - curl -T /path/to/file https://oshi.at   
   - curl -T /path/to/file https://oshi.at/customfilename # use a different filename   
   - curl -T /path/to/file https://oshi.at/customfilename/15 # use a different filename and expire in 15 minutes   
   - curl --upload-file /path/to/file https://oshi.at/customfilename/60 # expire in 60 minutes   
   - curl -T /path/to/file https://oshi.at/customfilename/-1 # auto-destroy after first download   
   - curl -T /path/to/file http://didllblj4qsn5oeaejoayl2orvdalsdyr4ppjvstsjfyorffdv6zrlid.onion # upload using our Tor hidden service   
   - curl -T /path/to/file "https://oshi.at/?expire=1440&autodestroy=1" # auto-destroy on dl and expire in 24 hours   

2. Using curl (POST method)
   - curl https://oshi.at -F f=@/path/to/file   
   - curl https://oshi.at -F f=@/path/to/file -F expire=5 # expire in 5 minutes   
   - curl https://oshi.at -F f=@/path/to/file -F expire=120 -F autodestroy=1 # autodestroy on download or expire in 120 minutes   
   - curl https://oshi.at -F f=@/path/to/file -F shorturl=0 # force a long URL in order to prevent possible short URL bruteforce   
   - curl https://oshi.at -F f=@/path/to/file -F randomizefn=1 # randomize filename   