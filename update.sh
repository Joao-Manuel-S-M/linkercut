#!/bin/bash
npm run build
aws s3 cp --recursive ./public/  s3://dev.victorpereiira.com/