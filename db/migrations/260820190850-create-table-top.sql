DROP TABLE IF EXISTS top_records;

CREATE TABLE IF NOT EXISTS top_records(
  id BIGSERIAL PRIMARY KEY,
  metric VARCHAR(250),
  product VARCHAR(250),
  exposed DECIMAL(10, 2),
  controlled DECIMAL(10, 2),
  uplift DECIMAL(10, 2),
  percent_uplift FLOAT(7)
);