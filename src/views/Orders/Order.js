import React, { Component } from 'react';
import { Link } from "react-router-dom"
function Order() {
    return (
        <>
            <div className='wrap row'>
                <div className='sidebar col-lg-6 col-12'>
                    <div className='sidebar_content'>
                        <div className='order_summarry'>
                            <div className='order_summary_product row'>
                                <div className='product_image col-lg-2 col-2'>
                                    <img className='w-50 h-70' src='https://product.hstatic.net/1000341789/product/mausac_mindigo_10f20dpa052__3__bbb9e97fa43045fbbe34b87cf13d3420_master.jpg' />

                                </div>
                                <div className='product_info col-lg-7 col-7'>
                                    <p>Ao len nam</p>
                                    <div>
                                        <span className='mr-2'>Blue/M</span>
                                        <span className='product_quantity'>2</span>
                                    </div>

                                </div>
                                <div className='product_price col-lg-3 col-3'><span>3,120,000</span></div>
                            </div>
                            <div className='order_summary_discount col-lg-12 col-12 px-0'>
                                <form id='discount'>
                                    <input type='text' placeholder='Mã Giảm giá'></input>
                                    <button type='submit'><span>Sử Dụng</span></button>
                                </form>
                            </div>
                            <div className='order_summary_total col-lg-12 col-12 px-0'>
                                <table className='col-lg-12 col-12 px-0'>
                                    <tbody>
                                        <tr className='justify-content-around'>
                                            <td>Tạm Tính</td>
                                            <td><span>3,500,000</span></td>

                                        </tr>
                                        <tr className='justify-content-around'>
                                            <td>Phí vận chuyển</td>
                                            <td>15,000</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr className='justify-content-around'>
                                            <td><span>Tổng cộng</span></td>
                                            <td><span>VND</span><span>3,500,000</span></td>
                                        </tr>
                                    </tfoot>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-12'>
                    <div className='main_header'>
                        <Link to='/'>
                            <h1>Mỹ Phẩm Routine</h1>
                        </Link>
                        <ul className=''>
                            <li>
                                <Link to='/cart'>Giỏ hàng</Link>
                            </li>
                            <li>
                                Thông tin đơn hàng
                            </li>
                        </ul>
                    </div>
                    <div className='main_content'>
                        <h2>Thông tin đơn hàng</h2>
                        <div className='customer_info'>
                            <input id='full_name' placeholder='Họ và tên' type='text' size='30'></input>
                            <div>
                                <input id='email' placeholder='Email' type='email' size='30'></input>
                                <input id='number_phone' placeholder='Số điện thoại' type='tel' size='30' maxLength='15'></input>
                            </div>
                            <input id='address' placeholder='Địa chỉ' type='text' size='30'></input>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Order