insert into houses (
    id serial primary key,
    name ,
    address ,
    city ,
    state ,
    zip integer,
    img text,
    mortgage ,
    rent )
    values ($1,$2,$3,$4,$5,$6,$7,$8,$9);
    select * from products