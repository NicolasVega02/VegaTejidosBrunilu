
const products = [
    {
        id: '1',
       name : 'Gorro Zorro',
       price : 5000,
       category : 'bebe',
       description : 'Gorro para bebe tejido con hilo 100% algodon',
       img : '/public/imagenes/gorroZorro.jpeg',
       stock:5

    },
    {
        id: '2',
       name : 'Among Us',
       price : 2500,
       category : 'colecciones',
       description : 'de la coleccion de Anmong Us',
       img : '/public/imagenes/amongUs.jpeg',
       stock : 5
    },
    {
        id: '3',
       name : 'Bobo',
       price : 10000,
       category : 'amigurumis',
       description : 'Bobo de Los simpsons 100% algodon',
       img : '/public/imagenes/bobo.jpg',
       stock: 5
    },
    {
        
        id: '4',
       name : 'Top Bikini',
       price : 10000,
       category : 'indumentaria',
       description : 'Top de bikini 100% algodon',
       img : '/public/imagenes/topBikini.jpg',
       stock: 5
    }

]
// creamos la promesa
const getProducts = () =>{
    let error = false
    return new Promise ((resolve , reject) => {
        setTimeout (()=>{
            if(!error){
                resolve ( products )
            }else{
                console.log("no se enconttro")
                reject ('Hubo un error, intente mas tarde ')
            }
        },2000)
        
    }
)
}
const getOneProduct = (id) => {
    
        return new Promise((resolve)=>{
            setTimeout(()=>{
                
                //version dinamica
                let prod = products.find((item)=> item.id === id)
                resolve(prod)
            },1000)
        })
    
}
export {getProducts, getOneProduct} ;