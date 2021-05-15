import React from 'react';
import { Link } from 'react-router-dom';

function CommentAdmin(props) {
    return (
        <div>
            <div class="card card-inner">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-2">
                            <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid" />
                            <p class="text-secondary text-center">15 Minutes Ago</p>
                        </div>
                        <div class="col-md-10">
                            <p><Link href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman Akash</strong></Link></p>
                            <p>Maniruzzaman Akash</p>
                            <p>
                                <Link class="float-right btn btn-outline-primary ml-2">  <i class="fa fa-reply"></i> Reply</Link>
                                <Link class="float-right btn text-white btn-danger"> <i class="fa fa-heart"></i> Like</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentAdmin;