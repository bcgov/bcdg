#!/bin/zsh

export LICENSE_PLATE=f5ff48
export VAULT_NAMESPACE=platform-services
export VAULT_ADDR=https://vault.developer.gov.bc.ca

vault login -method=oidc role=$LICENSE_PLATE

export AWS_ACCESS_KEY_ID=$(vault kv get -mount=${LICENSE_PLATE}-nonprod -field=TECHDOCS_S3_ACCESS_KEY_ID developerportal)
export AWS_SECRET_ACCESS_KEY=$(vault kv get -mount=${LICENSE_PLATE}-nonprod -field=TECHDOCS_S3_SECRET_ACCESS_KEY developerportal)
export AWS_DEFAULT_REGION=ca-central-1

echo 'Press any key to continue with publishing or ^C to quit...'; read -k1 -s

npx @techdocs/cli publish --publisher-type awsS3 \
            --storage-name backstage \
            --entity default/Component/bcdg \
            --awsEndpoint https://commonservices.objectstore.gov.bc.ca/ \
            --awsS3ForcePathStyle true \
            --awsBucketRootPath dev
