from PIL import Image, ImageDraw, ImageFont, ImageEnhance

image_width = 200
ascii_chars = " .,-~:;=+^*>!\#$&%@"
def convert_to_ascii_image(image, output_file_name=None, font_size=30, color=(255,255,255)):
    height = int(image_width * image.height // image.width *0.7)
    image = image.resize((image_width,height), Image.NEAREST)

    # load fonts
    font = ImageFont.truetype("fonts/CourierPrime-Regular.ttf", font_size)

    char_width = int(font_size * 0.605)
    char_height = int(font_size * 0.87)
    img_width = char_width * image_width
    img_height = char_height * height

    # create a blank image
    img = Image.new('RGB',(img_width,img_height),(0,0,0))
    draw = ImageDraw.Draw(img)

    for y in range(height):
        for x in range(image_width):
            if image.getpixel((x,y)) == 0:
                r = g = b = 0
            elif image.getpixel((x,y)) == 1:
                r = g = b = 256
            else:
                print(image.getpixel((x,y)))
                r, g, b = image.getpixel((x,y))
            gray = 0.299 * r + 0.587 * g + 0.114 * b
            index = int(gray / 256 * len(ascii_chars))
            # text += ascii_chars[index]
            draw.text(
                (x * char_width, y * char_height),
                ascii_chars[index],
                font=font,
                fill=(r, g, b)
            )
    # Enhancer
    enhancer = ImageEnhance.Brightness(img)
    enhancedimg = enhancer.enhance(2)
    # enhancedimg.save(output_path)
    return enhancedimg