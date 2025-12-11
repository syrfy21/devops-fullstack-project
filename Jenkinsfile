pipeline {
    agent any

    environment {
        PATH = "/usr/bin:/usr/local/bin:/bin:${env.PATH}"
    }

    stages {
        stage('Check Docker Access') {
            steps {
                sh '''
                    echo "PATH = $PATH"
                    id
                    which docker
                    docker --version
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
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
