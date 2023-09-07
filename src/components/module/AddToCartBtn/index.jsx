"use client"


import Link from "next/link";

import { Button } from "@mui/material";

import useMutation from "@hooks/useMutation";
import useUser from "@hooks/useUser";

// service
import { addToCart } from "@services/cartServices";

import { LoadingButton } from "@mui/lab";
import some from "lodash/some";
import { toast } from "react-toastify";

const AddToCartBtn = ({ className, _id }) => {
  const { user, updateUser } = useUser()
  const cart = user?.cart || null
  const isInCart = some(cart?.items, { _id })
  const [mutateAddToCart, loading] = useMutation(addToCart, {
    onSuccess: (data) => {
      updateUser((draft) => draft.cart = data.cart)
      toast.success(data.message)
    }
  })

  if(isInCart) {
    return (
      <Button
        LinkComponent={Link}
        href="/cart"
        variant="contained"
        className={className}
      >
        ادامه خرید
      </Button>
    )
  }

  return (
    <LoadingButton 
      loading={loading}
      onClick={() => mutateAddToCart(_id)} 
      variant="contained" 
      className={className}
      id="loadingBtn" // #FIXME id error 
    >
      ثبت نام دوره
    </LoadingButton>
  )
}

export default AddToCartBtn;