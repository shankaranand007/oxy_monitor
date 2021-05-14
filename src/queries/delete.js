const del = {
    del_catagory: "DELETE FROM items WHERE dish_id = ?",
    delete_catagory: "DELETE FROM catagory WHERE cat_id = ?",
    semi_del_catagory: "UPDATE items SET status = 0 WHERE dish_id = ?",
    semi_del_user: "UPDATE add_user SET status = 0 user_id = ?",
    flavoure: 'DELETE FROM flavoure WHERE id = ?',
    ingredients: 'DELETE FROM ingredients WHERE id = ?',
    discount: 'DELETE FROM discount WHERE id = ?',
    offer: 'DELETE FROM offer WHERE id = ?',
    del_sub_catagory:'DELETE FROM sub_catagory WHERE sub_catagory_id = ? ',
    delete_user:'DELETE FROM add_user WHERE user_id = ? ',
    Currency_del: 'DELETE FROM Currency WHERE id = ?',
    language_del: 'DELETE FROM language WHERE id = ?',
    tax_del: 'DELETE FROM tax WHERE id = ?',
    payment_type_del: 'DELETE FROM payment_type WHERE id = ?',
}
module.exports = del;