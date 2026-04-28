const fs = require('fs');

const path = require('path'); // 1. เพิ่ม module path เข้ามา

// 2. ใช้ path.join ประกอบร่างโฟลเดอร์ปัจจุบัน (__dirname) เข้ากับชื่อไฟล์
const targetFile = path.join(__dirname, 'tempCodeRunnerFile.json');
const rawText = fs.readFileSync(targetFile, 'utf8');
let rawData = JSON.parse(rawText);
if (!Array.isArray(rawData)) {
    rawData = [rawData];
}

// 2. ฟังก์ชันช่วยป้องกัน Error เวลาแปลงเป็น CSV
const formatCSV = (text) => {
    if (text === null || text === undefined) return '""';
    const str = String(text);
    return `"${str.replace(/"/g, '""')}"`;
};

// 3. กำหนดหัวตาราง (Header)
const csvRows = [];
const headers = [
    "Category_ID", "Category_Name",
    "Group_ID", "Group_Name",
    "Product_ID", "Product_Name", "Product_Properties",
    "Spec_ID", "Spec_Name",
    "Detail_Material", "Detail_Size", "Detail_Used", "Detail_Setup",
    "List_Name"
];
csvRows.push(headers.join(','));

// 4. วนลูปแกะข้อมูล (เพิ่มการเช็คว่ามีข้อมูลก่อนวนลูป เพื่อความเสถียร)
rawData.forEach(category => {
    const catId = category?.category_id || '';
    const catName = category?.category_name || '';

    if (category?.group) {
        category.group.forEach(group => {
            const groupId = group?.group_id || '';
            const groupName = group?.group_name || '';

            if (group?.product) {
                group.product.forEach(product => {
                    const prodId = product?.product_id || '';
                    const prodName = product?.product_name || '';
                    const prodProperty = product?.property ? product.property.join(' | ') : '';

                    if (product?.spec) {
                        product.spec.forEach(spec => {
                            const specId = spec?.spec_id || '';
                            const specName = spec?.spec_name || '';
                            const detail = spec?.detail || {};

                            const listName = spec?.list && spec.list.length > 0
                                ? spec.list.map(l => l.list_name).join(', ')
                                : '';

                            const rowData = [
                                formatCSV(catId),
                                formatCSV(catName),
                                formatCSV(groupId),
                                formatCSV(groupName),
                                formatCSV(prodId),
                                formatCSV(prodName),
                                formatCSV(prodProperty),
                                formatCSV(specId),
                                formatCSV(specName),
                                formatCSV(detail.material),
                                formatCSV(detail.size),
                                formatCSV(detail.used),
                                formatCSV(detail.setup),
                                formatCSV(listName)
                            ];

                            csvRows.push(rowData.join(','));
                        });
                    }
                });
            }
        });
    }
});

// 5. บันทึกไฟล์
const finalCSV = csvRows.join('\n');
fs.writeFileSync('product_flat_data.csv', finalCSV, 'utf8');

console.log(`✅ แปลงไฟล์สำเร็จ! สร้างข้อมูลไปทั้งหมด ${csvRows.length - 1} รายการ ตรวจสอบไฟล์ product_flat_data.csv ได้เลย`);