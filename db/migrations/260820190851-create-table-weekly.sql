DROP TABLE IF EXISTS weekly_records;

CREATE TABLE IF NOT EXISTS weekly_records(
  id BIGSERIAL PRIMARY KEY,
  product VARCHAR(250),
  week_commencing DATE,
  exposed INTEGER,
  controlled INTEGER
);