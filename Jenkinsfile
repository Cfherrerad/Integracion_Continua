pipeline {
    agent any

    stages {

        stage('Instalar Frontend') {
            steps {
                dir('front') {
                    sh 'npm install'
                }
            }
        }

        stage('Instalar Backend') {
            steps {
                dir('back') {
                    sh 'npm install'
                }
            }
        }

        stage('Construir Docker') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Verificacion') {
            steps {
                echo 'Pipeline ejecutado correctamente'
            }
        }
    }
}