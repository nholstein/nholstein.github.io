initSidebarItems({"mod":[["ctrl","Control Register. Can only be updated when the AES unit is idle. If the AES unit is non-idle, writes to this register are ignored."],["data_in","Register block Input Data Registers. Loaded into the internal State register upon starting encryption/decryption of the next block. After that, the processor can update the Input Data Register. The order in which the registers are written does not matter."],["data_out","Register block Output Data Register. Holds the output data produced by the AES unit during the last encryption/decryption operation. If FORCE_DATA_OVERWRITE=0 (see Control Register), the AES unit is stalled when the previous output data has not yet been read and is about to be overwritten. The order in which the registers are read does not matter."],["key","Register block Initial Key Registers. Loaded into the internal Full Key register upon starting encryption/decryption of the next block. Can only be updated when the AES unit is idle. If the AES unit is non-idle, writes to these registers are ignored. All key registers must be updated when the key is changed, regardless of key length (write 0 for unusued bits). The order in which the registers are updated does not matter."],["status","Status Register"],["trigger","Trigger Register"]],"struct":[["DATA_IN","Register block"],["DATA_OUT","Register block"],["KEY","Register block"],["RegisterBlock","Register block"]],"type":[["CTRL","Control Register. Can only be updated when the AES unit is idle. If the AES unit is non-idle, writes to this register are ignored."],["STATUS","Status Register"],["TRIGGER","Trigger Register"]]});