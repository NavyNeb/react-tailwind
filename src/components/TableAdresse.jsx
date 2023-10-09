import React, { useState, Fragment } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import ModalFlat from './ModalFlat';
import AddAddressForm from './AddAddressForm';


const columns = [
  { field: 'address', headerName: 'Address', width: 120 },
  { field: 'code', headerName: 'Code', type: 'number', width: 80 },
  { field: 'arrondissement', headerName: 'Arrondissement', width: 130 },
  {
    field: 'depart',
    headerName: 'Departement',
    width: 120,
  },
  {
    field: 'region',
    headerName: 'Region',
    description: 'This column contains regions values',
    sortable: false,
    width: 160,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, address: "Depanda tonerre", code: 123, arrondissement: 'Dla V', depart: "dont know", region: "Littoral" },
  
];
const TableAdresse = () => {
    let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <div className="h-[400] w-[100%] mx-auto my-2">
        <div className="flex justify-between items-center my-3 " >
            <h4 className="inline-block text-lg text-gray-800 align-baseline">My addresses</h4>
            <button
                type="button"
                onClick={openModal}
                className="cursor-pointer rounded-md bg-gradient-to-r from-blue-400 to-violet-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                Open dialog
            </button>
        </div>
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />

        <ModalFlat 
            isOpen={isOpen}
            children={<AddAddressForm />}
            title={"Add New Address"} 
            closeModal={closeModal} />
    </div>
  )
}

export default TableAdresse