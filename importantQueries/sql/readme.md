### Get Something Else If Null Found
---
1. In order to get some else text when any colums data is found Null.   
1. Use `COALESCE` for the same.    
1. Here `OFFSET` is used to ignore the first 4 records.    
```sql
SELECT COALESCE( CASE WHEN(acd_interval_denormalized_entity."ch_customer_data"::json->>'opportunity_owner') IS NULL THEN NULL ELSE(acd_interval_denormalized_entity."ch_customer_data"::json->>'opportunity_owner')
                 END, 'previous data') AS opportunity_owner
FROM "public"."acd_interval_denormalized_entity" acd_interval_denormalized_entity
WHERE ch_phone = '9999775879'
order by ch_date_added desc
limit 1
OFFSET 4;


SELECT COALESCE( CASE WHEN(acd_interval_denormalized_entity."ch_value_3"::json->>'managersNumber') IS NULL THEN NULL ELSE(acd_interval_denormalized_entity."ch_value_3"::json->>'managersNumber')
                 END, 'previous data') AS manager_number
FROM "public"."acd_interval_denormalized_entity" acd_interval_denormalized_entity
WHERE ch_phone = '9999775879'
order by ch_date_added desc
limit 1
OFFSET 4;


SELECT COALESCE( CASE WHEN(acd_interval_denormalized_entity."ch_value_3") IS NULL THEN NULL ELSE(acd_interval_denormalized_entity."ch_value_3")
                 END, 'previous data') AS manager_number
FROM "public"."acd_interval_denormalized_entity" acd_interval_denormalized_entity
WHERE ch_phone = '9999775879'
order by ch_date_added desc
limit 1
OFFSET 4;
```