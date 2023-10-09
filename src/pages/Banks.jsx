import React from 'react'
import DescListStripe from '../tailwind/application-ui/data-display/description-lists/DescListStripe'
import BadgeRounded from '../tailwind/application-ui/elements/badges/rounded_badges_with_dot'
import FeedsWithIcon from '../tailwind/application-ui/lists/feeds/FeedsWithIcon'
import StackedListWithContent from '../tailwind/application-ui/lists/stacked-lists/StackedListWithContent'
import StackedListWithHeading from '../tailwind/application-ui/lists/stacked-lists/StackedListWithHeading'
import StackedListWithActions from '../tailwind/application-ui/lists/stacked-lists/StackedListWithActions'
import StackedListRightJustify from '../tailwind/application-ui/lists/stacked-lists/StackedListRightJustify'
import TableSimple from '../tailwind/application-ui/lists/tables/TableSimple'
import TableFullWidth from '../tailwind/application-ui/lists/tables/TableFullWidth'
import TableWithAvatar from '../tailwind/application-ui/lists/tables/TableWithAvatar'
import TableWithMobile from '../tailwind/application-ui/lists/tables/TableWithMobile'
import TableWithCheckbox from '../tailwind/application-ui/lists/tables/TableWithCheckbox'
import TableCondensed from '../tailwind/application-ui/lists/tables/TableCondensed'
import TableWithGroup from '../tailwind/application-ui/lists/tables/TableWithGroup'
import TableWithSortHeading from '../tailwind/application-ui/lists/tables/TableWithSortHeading'
import TableWithStickyHeader from '../tailwind/application-ui/lists/tables/TableWithStickyHeader'
import TableWithStripedRow from '../tailwind/application-ui/lists/tables/TableWithStripedRow'
import TableWithWhiteBg from '../tailwind/application-ui/lists/tables/TableWithWhiteBg'
import TableWithSummary from '../tailwind/application-ui/lists/tables/TableWithSummary'
import SidebarFilter from '../tailwind/ecommerce/components/category-filters/SidebarFilter'
import FiltersExpandable from '../tailwind/ecommerce/components/category-filters/FiltersExpandable'
import CategorySimple from '../tailwind/ecommerce/page-examples/category-pages/CategorySimple'
import CategoryWithGrid from '../tailwind/ecommerce/page-examples/category-pages/CategoryWithGrid'
import CategoryWithSidebar from '../tailwind/ecommerce/page-examples/category-pages/CategoryWithSidebar'
import BrandSidebar from '../tailwind/application-ui/application-shells/sidebar/BrandSidebar'
import BrandSidebarWithConstraints from '../tailwind/application-ui/application-shells/sidebar/BrandSidebarWithConstraints'
import ModalWithDismiss from '../tailwind/application-ui/overlays/modals/ModalWithDismiss'
import ModalWithSingleAction from '../tailwind/application-ui/overlays/modals/centered_with_single_action'
import FormTwoColumnCard from '../tailwind/application-ui/forms/form-layouts/FormTwoColumnCard'
import FormFullWithCards from '../tailwind/application-ui/forms/form-layouts/FormFullWithCards'
import FormLabelLeft from '../tailwind/application-ui/forms/form-layouts/FormLabelLeft'
import FormStacked from '../tailwind/application-ui/forms/form-layouts/FormStacked'
import CardFull from '../tailwind/ecommerce/components/product-lists/CardFull'
import ProductCard from '../tailwind/ecommerce/components/product-lists/ProductCard'
import ProductCardBorder from '../tailwind/ecommerce/components/product-lists/ProductCardBorder'
import ProductCardScrolling from '../tailwind/ecommerce/components/product-lists/ProductCardScrolling'
import ProductCardPriceCta from '../tailwind/ecommerce/components/product-lists/ProductCardPriceCta'
import DropdownSimple from '../tailwind/application-ui/elements/dropdowns/simple'
import DropdownWithDivider from '../tailwind/application-ui/elements/dropdowns/with_dividers'

const Banks = () => {
  return (
    <div className="w-full h-screen p-10 " >
      {/* <FormStacked /> */}
      {/* <ModalWithSingleAction /> */}
      <TableSimple />
      <DropdownWithDivider />
      <ProductCardPriceCta />
      <TableWithAvatar />
      {/* <TableWithStickyHeader /> */}
        {/* 
        <TableWithMobile />
        <TableWithCheckbox />
        <TableCondensed /> 
        <TableWithGroup />
        <TableWithSortHeading />
        <TableWithStripedRow />
        <TableWithWhiteBg />
        <TableWithSummary />
        <SidebarFilter />
        <FiltersExpandable />
        <CategorySimple />
        <CategoryWithGrid />
        <CategoryWithSidebar /> */}
        {/* <BrandSidebar /> */}
        {/* <BrandSidebarWithConstraints /> */}
        {/* <StackedListWithContent />
        <StackedListWithHeading />
        <StackedListWithActions /> */}
        {/* <StackedListRightJustify /> */}
    </div>
  )
}

export default Banks