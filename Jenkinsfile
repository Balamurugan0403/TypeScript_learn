pipeline {
    agent any

    parameters {
        choice(name: 'FOLDER_NAME',
               choices: ['Sequence_js', 'Sequence_assignments', 'ts_learning'],
               description: 'Select folder')

        choice(name: 'FILE_NAME',
               choices: [
                   'printingdetails',
                   'sumofnumbers',
                   'areaofcircle',
                   'gettingname',
                   'avgrating_medium',
                   'birthdaydate',
                   'bmi_medium',
                   'gamescore_medium',
                   'listofproducts_medium',
                   'patternqn_medium',
                   'totalcostcal_Hard',
                   'Budget_tracking_Hard',
                   'Circleproperties_Hard',
                   'PriceCalculator_Hard',
                   'function',
                   'parameter',
                   'varusage',
                   'accessmodifier'
               ],
               description: 'Select file')

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
                bat 'npx tsc'
            }
        }

        stage('Run') {
            steps {
                bat "node dist\\${params.FOLDER_NAME}\\${params.FILE_NAME}.js ${params.PARAM1} ${params.PARAM2} ${params.PARAM3}"
            }
        }

    }
}
