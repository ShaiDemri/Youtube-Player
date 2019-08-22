echo 'Start Backend'

cd Backend
source ./execute.sh &

sleep 3s

echo 'Start Frontend'
cd ../Frontend
#execute react
npm start
cd ../
