class Cluster{
    constructor(cluster) {
        this.cluster =                    cluster || null;
        this.isMaster = cluster ? cluster.isMaster : null;
    }

    getCluster() {
        return this.cluster;
    }

    getIsMaster() {
        return this.isMaster;
    }

    setCluster(cluster) {
        this.cluster =                    cluster || null; 
        this.isMaster = cluster ? cluster.isMaster : null;
    }
    
    fork() {
        if(this.getIsMaster()){
            this.getCluster().fork();
        } else {
            throw new Error("this cluster is not master");
        }
    }
}