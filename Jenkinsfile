pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/19521791/status-page', 
                     branch: 'main'
            }
        }
        stage('Test') {
            steps {
                sh 'ls -la'
            }
        }
    }
}
