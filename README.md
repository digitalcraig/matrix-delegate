# matrix-delegate
Simple web application to respond to Matrix fedation delegation requests.

Any http request on port 3000 will return JSON m.server key using MATRIX_SERVER and MATRIX_PORT environment variables. Use with reverse proxy (e.g. nginx) to respond to federated Matrix delegation requests. See https://github.com/matrix-org/synapse/blob/master/docs/delegate.md
