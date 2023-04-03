pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo 'build stage'
        sh '''#!/bin/bash
ping google.com
'''
      }
    }

  }
}