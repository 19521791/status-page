pipeline {
    agent any

    environment {
      IMAGE_NAME = "long1100:status_page"
      IMAGE_TAG = "latest"
      DOCKER_HUB_REPO = "${IMAGE_NAME}:${IMAGE_TAG}"
      VPS_USER = "staging"
      VPS_HOST = "157.66.101.5"
      CONTAINER_NAME = "status_page_app"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("DOCKER_HUB_REPO")
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                  sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                sh "docker push ${DOCKER_HUB_REPO}"
            }
        }

        stage('Deploy to VPS') {
            steps {
                sshagent (credentials: ['vps-ssh-key']) {
                    sh """
                      ssh -o StrickHostKeyChecking=no ${VPS_USER}@${VPS_HOST} '
                        docker pull ${DOCKER_HUB_REPO} &&
                        docker stop ${CONTAINER_NAME} || true &&
                        docker rm ${CONTAINER_NAME} || true &&
                        docker run -d --name ${CONTAINER_NAME} -p 4000:80 ${DOCKER_HUB_REPO}
                      '
                    """
                }
            }
        }
    }

    post {
        always {
            cleanWs{}
        }
    }
}
