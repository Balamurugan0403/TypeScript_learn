pipeline {
    agent any
    parameters {
        choice(name: 'FILE_NAME', choices: ['printingdetails', 'sumofnumbers', 'areaofcircle', 'gettingname', 'avgrating_medium', 'birthdaydate', 'bmi_medium', 'gamescore_medium'], description: 'Select file to run')
        string(name: 'PARAM1', defaultValue: '', description: 'First input')
        string(name: 'PARAM2', defaultValue: '', description: 'Second input')
        string(name: 'PARAM3', defaultValue: '', description: 'Third input')
    }
    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }
        stage('Compile') {
            steps {
                bat 'cd Sequence_js && npx tsc'
            }
            
        }
        stage('Run') {
            steps {
                bat "node Sequence_js/dist/${params.FILE_NAME}.js ${params.PARAM1} ${params.PARAM2} ${params.PARAM3}"
            }
        }
    }
}
