echo "starting minikube"
minikube start 
echo "setting envs"
eval $(minikube docker-env)
echo "Starting the Services"
echo "Service1"
docker build -t k8sservice1  ./Services/Service1/.
kubectl run service1 --image=k8sservice1 --port=3000 --image-pull-policy=Never
echo "Service2"
docker build -t k8sservice2  ./Services/Service2/.
kubectl run service2 --image=k8sservice2 --port=3001 --image-pull-policy=Never
echo "Service3"
docker build -t k8sservice3  ./Services/Service1/.
kubectl run service3 --image=k8sservice3 --port=3002 --image-pull-policy=Never
echo "Checks the deployments and pods and services " 
kubectl get pods 
kubectl get deployments 
kubectl get services 