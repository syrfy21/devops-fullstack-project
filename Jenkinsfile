pipeline {
    agent any

    environment {
        PATH = "/usr/bin:/usr/local/bin:/bin:/usr/sbin:/usr/local/sbin"
    }

    stages {

        stage('Clone Repository') {
            steps {
                echo "Cloning repository..."
                git branch: 'main', url: 'https://github.com/syrfy21/devops-fullstack-project.git'
            }
        }

        stage('Check Docker Path') {
            steps {
                sh '''
                    echo "PATH = $PATH"
                    which docker || echo "docker not found!"
                    ls -l /usr/bin/docker
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker Image..."
                sh '''
                    docker --version
                    docker build -t fullstack-app .
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                    docker stop fullstack || true
                    docker rm fullstack || true
                    docker run -d -p 3000:3000 --name fullstack fullstack-app
                '''
            }
        }
    }
}
