import ean8 from '../assets/barcodeExamples/ean8.png';
import ean13 from '../assets/barcodeExamples/ean13.png';
import code39 from '../assets/barcodeExamples/code39.png';
import code128 from '../assets/barcodeExamples/code128.png';
import nw7 from '../assets/barcodeExamples/nw7.png';
import itf14 from '../assets/barcodeExamples/itf14.png';
import japanpost from '../assets/barcodeExamples/japanpost.png';
import qrcode from '../assets/barcodeExamples/qrcode.png';
import upca from '../assets/barcodeExamples/upca.png';
import upce from '../assets/barcodeExamples/upce.png';
import _imageExample from '../assets/imageExample.png';

export const destroyedErrMsg = 'this instance is already destroyed';

export const barcodeExampleImageObj: { [key: string]: string } = {
  qrcode,
  japanpost,
  ean13,
  ean8,
  code39,
  code128,
  nw7,
  itf14,
  upca,
  upce,
};
export const imageExample = _imageExample;
export const zoom = 3.7795275591;
export const rulerHeight = 30;
export const selectableClassName = 'selectable';
export const barcodeList = [
  'qrcode',
  'japanpost',
  'ean13',
  'ean8',
  'code39',
  'code128',
  'nw7',
  'itf14',
  'upca',
  'upce',
];
export const inputTypeList = ['text', 'image'].concat(barcodeList);

export const blankPdf =
  'data:application/pdf;base64,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IC9GbGF0ZURlY29kZSAvTGVuZ3RoIDIyMyA+PgpzdHJlYW0KeJxdkE1qxDAMhfc+hZbTxWBPug2BMqWQRX9o2gM4tpIaGtkoziK3r+yGKVRgg/zeJ56lr/1jTyGDfuPoBswwBfKMa9zYIYw4B1KXBnxw+ejq7RablBZ42NeMS09TVG0LoN9FXTPvcHrwccQ7pV/ZIwea4fR5HaQftpS+cUHKYFTXgcdJJj3b9GIXBF2xc+9FD3k/C/Pn+NgTQlP7y28aFz2uyTpkSzOq1kh10D5JdQrJ/9MPapzcl+Xqvhe3MY2p7uO9cOV/t1BuY5Y8dQk1SIkQCG97SjEVqpwfQGNvOWVuZHN0cmVhbQplbmRvYmoKMTAgMCBvYmoKPDwgL1R5cGUgL09ialN0bSAvTGVuZ3RoIDQzMSAvRmlsdGVyIC9GbGF0ZURlY29kZSAvTiA2IC9GaXJzdCAzOCA+PgpzdHJlYW0KeJx9Ustu2zAQvPcr5mgfLD5EWRIQBLDjujEKJ0bsNocgB0ZiVKKSKEg0UP99l3Lipj0UBEloObszOyshwCEkYgERI0kgFERKVwIpcog5lOKfrq7Adr0rj4XpMdn/tJrtVms02XyK6+vxebkFu3N9o2uwQkNc4nowa9d6sEVvdb09gK3MUJi21K0PDwOeAg3HA57BPreFK21bgW1K03rrT7NbsP3xxZ86A3agk9PlvrWWgAb5mDjGwUaeN94bd6QPAfbVloHiwnCG7nRlhnfsIujxyHkSyTRWirJ1d2ts9cMjFUmUSU7+vOn2mEkholwoPifKWlcD1Jl7uXS/iGo2n6soSXiaYRZLFaU85TEkl1kUUyUIHqeR4HmcBT0hcW1rI5GdewmBO92YD45tvK5tsWir2hCG7b1pvkORsDxTVOVD+0Fjbzvv+v8M4Gaz2p8GKrJpXx0C6L4vTR9sn7zbPgV7MJUdfH/CZFG6FzMNc+i62jTBBE71x0oH92Wz2uruz8TIqccg8x899EuN/V2GSckBEsTLv0bIHslFTjtNOMKSaRplo3fPtKix3+WDw+1lbmRzdHJlYW0KZW5kb2JqCjEgMCBvYmoKPDwgL1R5cGUgL1hSZWYgL0xlbmd0aCAxNiAvRmlsdGVyIC9GbGF0ZURlY29kZSAvRGVjb2RlUGFybXMgPDwgL0NvbHVtbnMgNCAvUHJlZGljdG9yIDEyID4+IC9XIFsgMSAyIDEgXSAvU2l6ZSAyIC9JRCBbPDNhNWQ4NTM3ODA4NjY4YTgwMzcwODVlNmM2ZDhmNmU0PjwzYTVkODUzNzgwODY2OGE4MDM3MDg1ZTZjNmQ4ZjZlND5dID4+CnN0cmVhbQp4nGNiAAImRnkPBgABGQBtCmVuZHN0cmVhbQplbmRvYmoKICAgICAgICAgICAgICAgCnN0YXJ0eHJlZgoyMTYKJSVFT0YK';
