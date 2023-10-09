import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import RadioCardGroup from '../../tailwind/application-ui/forms/radio-groups/RadioCardGroup'
import DeliverySelectSection from './DeleverySelectSection'


const product = {
    name: 'Zip Tote Basket',
    price: '$140',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Angled view',
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
        alt: 'Angled front view with bag zipped and handles upright.',
      },
      {
          id: 1,
          name: 'Angled view',
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
          alt: 'Angled front view with bag zipped and handles upright.',
        },
        {
          id: 1,
          name: 'Angled view',
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg',
          alt: 'Angled front view with bag zipped and handles upright.',
        },
        {
          id: 1,
          name: 'Angled view',
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg',
          alt: 'Angled front view with bag zipped and handles upright.',
        },
        {
          id: 1,
          name: 'Angled view',
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
          alt: 'Angled front view with bag zipped and handles upright.',
        },
        {
          id: 1,
          name: 'Angled view',
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg',
          alt: 'Angled front view with bag zipped and handles upright.',
        },
    ],
    colors: [
      { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
      { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
      { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
    ],
    sizes: [
        { name: 'XXS', inStock: true },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: false },
      ],
    description: `
      <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
    `,
    details: [
      {
        name: 'Features',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ],
      },
      // More sections...
    ],
  }
  
  function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
const ProductInfoSection = () => {
    const [open, setOpen] = useState(false)
    const [fav, setFav] = useState(false)
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
    <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

    <div className="mt-3">
      <h2 className="sr-only">Product information</h2>
      <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
    </div>

    {/* Reviews */}
    <div className="mt-3">
      <h3 className="sr-only">Reviews</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                product.rating > rating ? 'text-fuchsia-500' : 'text-gray-300',
                'h-5 w-5 flex-shrink-0'
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{product.rating} out of 5 stars</p>
      </div>
    </div>

    <div className="mt-6">
      <h3 className="sr-only">Description</h3>

      <div
        className="space-y-6 text-base text-gray-700"
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
    </div>

    <form className="mt-6">
      {/* Colors */}
      <div>
        <h2 className="text-sm font-medium text-gray-900">Color</h2>

        <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
          <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
          <div className="flex items-center space-x-3">
            {product.colors.map((color) => (
              <RadioGroup.Option
                key={color.name}
                value={color}
                className={({ active, checked }) =>
                  classNames(
                    color.selectedColor,
                    active && checked ? 'ring ring-offset-1' : '',
                    !active && checked ? 'ring-2' : '',
                    '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                  )
                }
              >
                <RadioGroup.Label as="span" className="sr-only">
                  {' '}
                  {color.name}{' '}
                </RadioGroup.Label>
                <span
                  aria-hidden="true"
                  className={classNames(
                    color.bgColor,
                    'h-8 w-8 border border-black border-opacity-10 rounded-full'
                  )}
                />
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
      {/** Size Select */}  
      <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-900">Size</h2>
                  <a href="#" className="text-sm font-medium text-fuchsia-600 hover:text-fuchsia-500">
                    See sizing chart
                  </a>
                </div>

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-2">
                  <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        className={({ active, checked }) =>
                          classNames(
                            size.inStock ? 'cursor-pointer focus:outline-none' : 'opacity-25 cursor-not-allowed',
                            active ? 'ring-2 ring-offset-2 ring-fuchsia-500' : '',
                            checked
                              ? 'bg-fuchsia-600 border-transparent text-white hover:bg-fuchsia-700'
                              : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                            'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                          )
                        }
                        disabled={!size.inStock}
                      >
                        <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
      </div>

      {/* Delivery Section */}  
      <div className="mt-6" >
          <DeliverySelectSection />
      </div>
      <div className="mt-10 flex">
        <button
          type="submit"
          className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-fuchsia-600 py-3 px-8 text-base font-medium text-white hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
        >
          Add to bag
        </button>

        <button
          type="button"
          onClick={ ()=> setFav(!fav) }
          className={
              fav ? "ml-4 flex items-center justify-center rounded-md py-3 px-3 text-red-900 bg-red-100" : 
              "ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
          }
        >
          <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
          <span className="sr-only">Add to favorites</span>
        </button>
      </div>
    </form>

    <section aria-labelledby="details-heading" className="mt-12">
      <h2 id="details-heading" className="sr-only">
        Additional details
      </h2>

      <div className="divide-y divide-gray-200 border-t">
        {product.details.map((detail) => (
          <Disclosure as="div" key={detail.name}>
            {({ open }) => (
              <>
                <h3>
                  <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                    <span
                      className={classNames(
                        open ? 'text-fuchsia-600' : 'text-gray-900',
                        'text-sm font-medium'
                      )}
                    >
                      {detail.name}
                    </span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon
                          className="block h-6 w-6 text-fuchsia-400 group-hover:text-fuchsia-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusIcon
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                  <ul role="list">
                    {detail.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
</div>
  )
}

export default ProductInfoSection