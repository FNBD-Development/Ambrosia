## Start with the database ##
CREATE DATABASE Ambrosia;
use Ambrosia;
## Tables
CREATE TABLE monitor_data (
  id Int, 
  name VARCHAR(255),
  type VARCHAR(255),
  ## not so sure on this one
  tsc BigInt,
  uptime Int,
  downtime Int
)

CREATE TABLE uptime_array (
  id Int, 
  name VARCHAR(255),
  timestamp Int,
  status VARCHAR(255),
  ping Int
)


CREATE TABLE user (
  id Int,
  name VARCHAR(255),
  password VARCHAR(255)
)

## this should be good for now
