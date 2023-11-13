echo "Starting the Services"
echo "Service1"
docker build -t service1  ./Services/Service1/.
docker run -d -p 3000:3000 --name service1-container service1
echo "Service2"
docker build -t service2  ./Services/Service2/.
docker run -d -p 3001:3001 --name service2-container service2
echo "Service3"
docker build -t service3  ./Services/Service3/.
docker run -d -p 3002:3002 --name service3-container service3