# Table of Contents

- [Table of Contents](#table-of-contents)  
   \_ [<ins><ins>Filter SQL Queries</ins></ins></ins>](#filter-sql-queries)

### <ins>Filter SQL Queries</ins>

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
