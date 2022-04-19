from openpyxl import load_workbook, Workbook
from collections import OrderedDict
import json

def ridi_to_json(ridi_xlsx_name):
    # ridi_xlsx_name = "ridibooks_webtoon.xlsx"
    data_list = []

    wb = load_workbook(ridi_xlsx_name)
    ws = wb.active
    # print(data)
    sheet = wb['Sheet']
        
    for i in range(2, len(sheet["A"])+1):
        data = OrderedDict()
        data["title"] = sheet["B" + str(i)].value
        data["thumbnail"] = sheet["C" + str(i)].value
        data["detail_link"] = sheet["D" + str(i)].value
        intro = sheet["E" + str(i)].value\
            .replace("<"+sheet["B" + str(i)].value + "> ","")
        data["introduction"] = intro
        data["writer"] = sheet["F" + str(i)].value
        data["genre"] = sheet["G" + str(i)].value
        data_list.append(data)
    # print(data_list)

    j = json.dumps(data_list, ensure_ascii=False)

    with open('ridibooks_data.json', 'w', encoding='utf-8') as f:
        file = f.write(j)
    
    return file
