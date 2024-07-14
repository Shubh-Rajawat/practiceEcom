import React from 'react'

const Cart = () => {
    return (
        <div className="  min-h-screen  flex flex-col">
            <div className="  text-primary-foreground py-4 px-6">
                <h1 className="text-2xl font-semibold">Your Cart</h1>
            </div>
            <main className="flex-1 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div className="bg-card p-4 rounded-lg flex items-center">
                        <img src="https://placehold.co/150" alt="Product Image" className="w-16 h-16 rounded-lg mr-4" />
                        <div>
                            <h2 className="text-lg font-semibold">Lisinopril</h2>
                            <p className="text-sm text-muted">Used to treat high blood pressure.</p>
                            <p className="text-lg font-semibold mt-2">$10.00</p>
                        </div>
                    </div>
                    
                    <div className="bg-card p-4 rounded-lg flex items-center">
                        <img src="https://placehold.co/150" alt="Product Image" className="w-16 h-16 rounded-lg mr-4" />
                        <div>
                            <h2 className="text-lg font-semibold">Ibuprofen</h2>
                            <p className="text-sm text-muted">Effective for relieving pain and fever.</p>
                            <p className="text-lg font-semibold mt-2">$25.00</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="bg-purple-600 text-white 0-foreground py-4 px-6">
                <div className="flex justify-between items-center">
                    <p className="text-lg">Total: $35.00</p>
                    <button className="bg-white text-black font-semibold px-4 py-2 rounded-md">Checkout</button>
                </div>
            </footer>
        </div>
    )
}

export default Cart