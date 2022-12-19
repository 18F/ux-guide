#!/usr/bin/env bash

ERRORS=$(grep -HEroine "\(/|href=['\"]/" _pages)
CODE=$?

if [ "$CODE" -ne "0" ]; then
  exit 0
fi

for ERR in $ERRORS
do
  IFS=':'
  read -ra BITS <<< "$ERR"
  echo "::error file=/${BITS[0]},line=${BITS[1]}::Internal link begins with /, but should begin with {{ site.baseurl }}/"
done

exit 1