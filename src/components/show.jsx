import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
const Show=()=>{
    var [data,updatedata]=useState([]);
            useEffect(
                function()
                {
                    async function getData()
                    {
                        var res=await axios.get('https://fakestoreapi.com/products');
                        updatedata(res.data);
                    }
                    getData();
                }
            );
            return(
                <>                     
                    <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                        <a class="navbar-brand" href="#">Product</a>
                        </div>
                        <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Home</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Product</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> About</a></li>
                        </ul>
                    </div>
                            </nav>                                        
      
                            <div class="row">
                            <div className="col-sm-12">
            {data.map((v)=>{
                            return(
                                 <>             
                                         
                                            <div className="card">
                                                <div className="col-sm-3">
                                                <div className="card-body">
                                                    <img src="https://picsum.photos/200/300" class="card-img-top" />
                                                    <h4 className="card-title">{v.title}</h4>
                                                    <p className="card-text">{v.category}</p>
                                                    <p className="card-text">{v.price}</p>
                                                    <a href="#" class="btn btn-primary stretched-link">Buy</a>
                                            </div>
                                            </div>
                                            </div>
                                        </>
                                    )
                                })}
                                               
</div>
</div>
</>
            )}
export default Show;