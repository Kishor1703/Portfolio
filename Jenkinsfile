pipeline {

    agent any

    tools {
        nodejs 'Node20'
    }

    environment {
        VERCEL_TOKEN = credentials('VERCEL_TOKEN')
    }

    stages {

        stage('Clone') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Kishor1703/Portfolio.git'
            }
        }

        stage('Dependencies Installation') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                sh 'npx vercel --prod --token=$VERCEL_TOKEN --yes'
            }
        }
    }
}