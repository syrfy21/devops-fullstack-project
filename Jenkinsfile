pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t fullstack-app .'
            }
        }

        stage('Deploy Container') {
            steps {
                echo 'Deploying container...'
                sh '''
                    docker stop fullstack || true
                    docker rm fullstack || true
                    docker run -d -p 3000:3000 --name fullstack fullstack-app
                '''
            }
        }
    }
}

