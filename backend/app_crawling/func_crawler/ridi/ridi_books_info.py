import requests
from bs4 import BeautifulSoup
from openpyxl import load_workbook, Workbook
from openpyxl.styles import Font

# xlsx_name = "ridibooks_webtoon"

def ridi_info():
    
    xlsx_name = "ridibooks_webtoon"

    source_url = "https://ridibooks.com/event/23727"

    req = requests.get(source_url)
    html = req.content
    soup = BeautifulSoup(html, 'lxml')
    url_list = []
    title_thumbnail = {} #썸네일
    title_detail_link = {} #상세페이지
    title_writer = {} #작가
    title_keyword = {} #이 책의 키워드
    title_introduction = {} #작품 소개

    for href in soup.find("div", class_ = "event_detail_wrapper").find_all('h3'):
        href_f = href.find("a")
        if href_f is not None:
            url_list.append("https://ridibooks.com"+href.find("a")["href"])
        else:
            continue


    for url in url_list:
        req_url = requests.get(url)
        html_url = req_url.content
        soup_url = BeautifulSoup(html_url, 'lxml')
        
        
        title = soup_url.select_one('#page_detail > div.detail_wrap > div.detail_body_wrap > section > article.detail_header.trackable > div.header_info_wrap > div.info_title_wrap > h3')
        image = soup_url.find("div", class_="thumbnail_image")
        ww = soup_url.find("p", class_="metadata_writer")
        introduction = soup_url.find("article", class_="detail_introduce_book")


        if title is not None:
            title = soup_url.select_one('#page_detail > div.detail_wrap > div.detail_body_wrap > section > article.detail_header.trackable > div.header_info_wrap > div.info_title_wrap > h3').text
        
            #detail_link, 중복 불허
            title_detail_link[title] = url

            #keyword
            keywords = soup_url.select(".keyword")

        else:
            continue

        keyword_list = []
        

        for num in keywords:
            keyword_list.append(num.get_text())
            title_keyword[title] = keyword_list
            keyword_list=[keyword.strip("#") for keyword in keyword_list] 
        
        #thumbnail url
        if image is not None:
            image = soup_url.find("div", class_="thumbnail_image").find("img")["src"]
            thumbnail_url = "http:" + image
            title_thumbnail[title] = thumbnail_url
        
        #작품 소개
        if introduction is not None:
            introduction = soup_url.find("article", class_="detail_introduce_book").find("p").text
            title_introduction[title] = introduction   
        
        #writer
        if ww is not None:
            ww = soup_url.find("p", class_="metadata_writer").find_all("a")
            writer = []
            for w in ww:
                writer.append(w.text)
                title_writer[title] = "\/".join(writer)


        
        # else:
            # continue

    # 엑셀파일 쓰기
    work_book = Workbook()

    # 시트 입력
    sheet = work_book.active

    key_list= list(title_keyword.keys())
    value_list = list(title_keyword.values())
    thumbnail = list(title_thumbnail.values())
    detail_link_list = list(title_detail_link.values())
    introduction_list = list(title_introduction.values())
    writer_list = list(title_writer.values())
    total_value = ""
    introduction_value = ""
    writer_value = ""

    sheet['B1'] = "title"
    sheet['C1'] = "thumbnail"
    sheet['D1'] = "detail_link"
    sheet['E1'] = "introduction"
    sheet['F1'] = "writer"
    sheet['G1'] = "genre"


    for jj in range(2, len(title_thumbnail)+2):
        sheet['B' + str(jj)] = key_list[jj-2]
        sheet['B' + str(jj)].font = Font(name="나눔고딕", color="000000")
        sheet['C' + str(jj)] = thumbnail[jj-2]
        sheet['C' + str(jj)].font = Font(name="나눔고딕", color="000000")
        sheet['D' + str(jj)].font = Font(name="나눔고딕", color="000000")
        sheet['D' + str(jj)] = detail_link_list[jj-2]
        introduction_value = introduction_list[jj-2]
        sheet['E' + str(jj)] = "".join(introduction_value)
        sheet['E' + str(jj)].font = Font(name="나눔고딕", color="000000")
        writer_value = writer_list[jj-2]
        sheet['F' + str(jj)] = "".join(writer_value)
        sheet['F' + str(jj)].font = Font(name="나눔고딕", color="000000")
        total_value = value_list[jj-2]
        sheet['G' + str(jj)] = ",".join(total_value)
        sheet['G' + str(jj)].font = Font(name = "나눔고딕", color = "000000")
    
    ridi_xlsx_name = xlsx_name + ".xlsx"
    
    work_book.save(ridi_xlsx_name)

    return ridi_xlsx_name
