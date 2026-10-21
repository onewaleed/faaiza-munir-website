#import <Foundation/Foundation.h>
#import <CoreGraphics/CoreGraphics.h>
#import <ImageIO/ImageIO.h>

int main() {
    NSString *p = @"/Users/wn-fch/.gemini/antigravity-ide/brain/083fb2cf-8bf8-449e-8401-6cfb0c0f9cbd/.user_uploaded/media_1792534252372.jpg";
    CGImageSourceRef src = CGImageSourceCreateWithURL((__bridge CFURLRef)[NSURL fileURLWithPath:p], NULL);
    CGImageRef img = CGImageSourceCreateImageAtIndex(src, 0, NULL);
    size_t w = CGImageGetWidth(img);
    size_t h = CGImageGetHeight(img);
    printf("media_1792534252372.jpg: w=%zu, h=%zu\n", w, h);
    
    // Let's sample colors down the center to see where the green top starts and ends
    CGColorSpaceRef cs = CGColorSpaceCreateDeviceRGB();
    unsigned char *data = (unsigned char *)malloc(w * h * 4);
    CGContextRef ctx = CGBitmapContextCreate(data, w, h, 8, w * 4, cs, (CGBitmapInfo)kCGImageAlphaPremultipliedLast);
    CGContextDrawImage(ctx, CGRectMake(0, 0, w, h), img);
    
    // In CGContext, row 0 is bottom of image, row h-1 is top of image!
    // So image coordinate Y (0 at top, h-1 at bottom) corresponds to memY = h - 1 - Y.
    int greenStart = -1, greenEnd = -1;
    for (int y = 0; y < (int)h; y += 5) {
        int memY = (int)h - 1 - y;
        // sample center-left (x = w * 0.3) where shirt sleeve/body is
        int r = data[(memY * (int)w + (int)(w * 0.3)) * 4];
        int g = data[(memY * (int)w + (int)(w * 0.3)) * 4 + 1];
        int b = data[(memY * (int)w + (int)(w * 0.3)) * 4 + 2];
        if (g > 100 && g > r * 1.3 && g > b * 1.3) {
            if (greenStart == -1) greenStart = y;
            greenEnd = y;
        }
    }
    printf("Green shirt detected between image Y = %d and %d\n", greenStart, greenEnd);
    return 0;
}
